(function() {
    YAHOO.Bubbling.fire("registerAction",
    {
        actionName: "onActionSendEmail",
        fn: function ZK_onActionSendEmail(file) {
                var myprotocol = "http";
                if(window.location.protocol.indexOf("https") != -1){
                  myprotocol = myprotocol+"s";
                }
          	var mymail = "mailto:?subject=Link%20from%20Alfresco&body="+myprotocol+"://"+window.location.host+"/alfresco"+file.webdavUrl+"";
        	window.location = mymail;
        }
    });
})();
