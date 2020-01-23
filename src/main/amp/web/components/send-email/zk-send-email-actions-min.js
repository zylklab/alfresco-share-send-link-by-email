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
                var subject     = this.msg("zk.subject");
                // URL to download file
                //var body = myprotocol+"://"+window.location.host+"/share/proxy/alfresco/api/node/content/"+file.nodeRef.replace(":/", "")+'/'+filename;
                // URL to prewiew document in Share
                var body        = myprotocol+"://"+window.location.host+"/share/page/document-details?nodeRef="+file.nodeRef;
                var mymail      = "mailto:?subject="+subject.replace(" ", "%20")+"%20"+filename.replace(" ", "%20")+"&body="+body;
                window.location = mymail;
        }
    });
})();
