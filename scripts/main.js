"use strict";console.log("animations"),function(){$(function(){if($(".underline-svg").each(function(a,b){for(var c=$(b).width(),d=6,e=4,f=c/d,g=["M0","1"],h=["M0","1"],i=1;d>=i;i++)h.push(f*(-.5+i),1,f*i,1),g.push(f*(-.5+i),e,f*i,1);$(b).find(".underline-svg--path").attr("d",h.join(" "));var j=$(b).find(".underline-svg--animation");$(b).parent().hover(function(){j.attr({from:h.join(" "),to:g.join(" ")}),j[0].beginElement()},function(){j.attr({to:h.join(" "),from:g.join(" ")}),j[0].beginElement()})}),$(".tech-and-skills--title").click(function(){$(this).parent().toggleClass("active")}),$(window).height()>800)var a=650;else var a=500;$("#hero").waypoint({handler:function(a){$(".hero--outline").css("animation","dash 8s cubic-bezier(.53,1,1,.77) forwards ")},offset:a}),$(".divider").waypoint({handler:function(a){$(this.element).find(".stroke").css("animation","dash 8s ease-in-out forwards")},offset:a}),$(".divider-animated").waypoint({handler:function(a){$(this.element).find(".divider-animated--line").css({"animation-name":"dash","animation-duration":"12s","animation-fill-mode":"forwards"})},offset:a})})}();