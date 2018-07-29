(function() {
    YAHOO.Bubbling.fire("registerAction",
    {
        actionName: "onActionSendEmail",
        fn: function ZK_onActionSendEmail(file) {
                var myprotocol = "http";
                if(window.location.protocol.indexOf("https") != -1){
                  myprotocol = myprotocol+"s";
                }
                //var downloadURL = myprotocol+"://"+window.location.host+"/alfresco"+file.webdavUrl;
                var aux         = file.webdavUrl.split("/");
                var naux        = aux.length;
                var filename    = aux[naux - 1];
                var downloadURL = myprotocol+"://"+window.location.host+"/share/proxy/alfresco/api/node/content/"+file.nodeRef.replace(":/", "")+'/'+filename;
                var mymail      = "mailto:?subject=Link%20from%20Alfresco&body="+downloadURL;
                window.location = mymail;
        }
    });
})();
