var guess = {
		formatNumber:function(num){
			if(num>9)return num;
			return '0'+num;
		},
		initForm:function(options){
			if(!options.url)return;
			$.ajax({
				type:"POST",
				dataType:"json",
				data:options.params||{},
				url:options.url,
				success:function(data){
					options.form.setData(data);
				}
			});
		},
		GuessGrid:function(options){
			var g  = $.extend({page:1,pagesize:15,usePage:true},options);
			var addCss=''||' '+g.addCss;
			var htm = '<table cellpadding=0 cellspacing=0 class="guessGrid'+addCss+'"><thead>';
			var pageHTML='';
			if(g.usePage){
				pageHTML+='<tr><td colspan="'+g.columns.length+'"><table cellpadding=0 cellspacing=0 class="page"><tr height="30px">';
				pageHTML+='<td><a class="gbutton gray small" href="javascript:grid_'+g.referId+'.prePage();">上一页</a>';
				pageHTML+='<strong id="pagestr">1/1</strong>';
				pageHTML+='<a class="gbutton gray small" href="javascript:grid_'+g.referId+'.nextPage();">下一页</a></td>';
				pageHTML+='</tr></table></td></tr>';
				pageHTML+='<tr>';
			}
			if(g.pagePosition!='bottom'){
				htm+=pageHTML.replace('class="page"','class="page bottom-none"');
			}
			for(var i=0;i<g.columns.length;i++){
				htm+='<td';
				if(g.columns[i].width){
					htm+=' width="'+g.columns[i].width+'"';
				}
				htm+='>'+g.columns[i].headerText+'</td>';
			}
			htm+='</tr></thead><tbody id="'+g.referId+'_tb"><tr><td colspan="'+g.columns.length+'">暂无数据</td></tr></tbody>';
			if(pageHTML&&g.pagePosition=='bottom'){
				htm+='<tfoot>'+pageHTML+'</tfoot>';
			}
			htm+='</table>';
			$("#"+g.referId).html(htm);
			g._query = function(){
				var g = this;
				$.ajax({
					type:"POST",
					dataType:"json",
					data:{page:g.page,pagesize:g.pagesize},
					url:g.url,
					success:function(data){
						g.setData(data);
						if(g.callback){
							g.callback();
						}
					}
				});
			};
			
			g.setData=function(data){
				var row = data.Rows;
				g.gridData=row;
				g.totalPage = parseInt((data.Totals+g.pagesize-1)/g.pagesize);
				var htm='';
				if(row.length==0){
					htm+='<tr><td colspan="'+g.columns.length+'">暂无数据</td></tr>';
				}else{
					for(var i=0;i<row.length;i++){
						htm+='<tr>';
						var val;
						for(var j=0;j<g.columns.length;j++){
							if(g.columns[j].render){
								val = g.columns[j].render(row[i],j);
							}else{
								val = row[i][g.columns[j].fieldName];
							}
							htm+='<td style="text-align:left;word-break:break-all; word-wrap:break-word;" >'+val+'</td>';
						}
						htm+='</tr>';
					}
				}
				if(g.usePage){
					$("#pagestr").html(g.page+"/"+g.totalPage);
				}
				$("#"+g.referId+"_tb").html(htm);
			};
			if(g.url){
				g._query();
			}
			g.reload=function(){
				g.page=1;
				g._query();
			};
			g.reloadUrl=function(url){
				g.url=url;
				g.reload();
			}
			if(g.data){
				g.setData(g.data);
			}
			g.prePage = function(){
				if(this.page>1){
					this.page = this.page-1;
					this._query();
				}
			};
			g.nextPage = function(){
				if(this.page<this.totalPage){
					this.page = this.page+1;
					this._query();
				}
			};
			window['grid_'+g.referId] = g;
			return g;
		}
};