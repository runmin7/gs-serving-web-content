;(function($){
/**
 * jqGrid extension
 * yarm76@naver.com
 * 
**/ 
$.jgrid.extend({
	getSameRowData : function(obj, key){
		var $t = this[0];
		var selector = "td[aria-describedby=" + $t.id + "_" + key + "]";
		return obj.closest("tr").find(selector).html();
	},
	getSameRowObject : function(obj, key){
		var $t = this[0];
		var selector = key;
		return obj.closest("tr").find(selector);
	},
	setSameRowData : function(obj, key, val){
		var $t = this[0];
		var selector = "td[aria-describedby=" + $t.id + "_" + key + "]";
		return obj.closest("tr").find(selector).html(val);
	},
	getJSONCheckedData : function(options){
		var $t = $(this);
		var ids = $t.getDataIDs();
		var datas = new Array();
    	
    	for(var index in ids) {
	    	var data = $t.getRowData(ids[index]);
	    	var r = {};	
	    	if($("tr#"+ids[index]+" input:checked", $t).size() == 1){
	    		for(var key in options){
	        		if(data[options[key]]==null){
	        			r[key] = options[key];
	        		}else{
	        			r[key] = data[options[key]];
	        		}
	        	}
		    	datas.push(r);
	    	}
	    }
	    if(datas.size <= 0){
	    	return "";
	    } else {
	    	//alert(unescape((JSON.stringify(datas)).replace('/\\/gi','%')));
	    	return JSON.stringify(datas);
	    }
	},
	getJSONUncheckedData : function(options){
		var $t = $(this);
		var ids = $t.getDataIDs();
		
    	var datas = new Array();
    	
    	for(var index in ids) {
	    	var data = $t.getRowData(ids[index]);
	    	var r = {};
	    	if($("tr#"+ids[index]+" input:checked", $t).size() == 0){
	    		for(var key in options){
	        		if(data[options[key]]==null){
	        			r[key] = options[key];
	        		}else{
	        			r[key] = data[options[key]];
	        		}
	        	}
		    	datas.push(r);
	    	}
	    }
	    if(datas.size <= 0){
	    	return "";
	    } else {
	    	//alert(unescape((JSON.stringify(datas)).replace('/\\/gi','%')));
	    	return JSON.stringify(datas);
	    }
	},
	getJSONAllData : function(options){
		var $t = $(this);
		var ids = $t.getDataIDs();
    	var datas = new Array();
    	
    	for(var index in ids) {
	    	var data = $t.getRowData(ids[index]);
	    	var r = {};

	    	if($("tr#"+ids[index]+" input:checked", $t).size() == 0){
				r["checked"] = "0";
			}else{
				r["checked"] = "1";
			}
	    	
    		for(var key in options){
        		if(data[options[key]]==null){
        			r[key] = options[key];
        		}else{
        			r[key] = data[options[key]];
        		}
        	}
	    	datas.push(r);
	    }
	    if(datas.size <= 0){
	    	return "";
	    } else {
	    	return JSON.stringify(datas);
	    }
	},
	getJSONData : function(datas){
	    return JSON.stringify(datas);
	}
});
})(jQuery);