FS.debug = true;

var fileStore = new FS.Store.S3("meteorimages", {
    // region: 'ap-southeast-1',
    accessKeyId: 'AKIAJDCCA53RLFM3BEYQ',
    secretAccessKey: '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',
    bucket: 'meteorimages'
});

Uploads = new FS.Collection("meteorimages", {
    stores: [fileStore],
    chunkSize: 2048000
});

Meteor.startup(function() {
    Uploads.allow({
        insert: function(userId, doc){
            return true;
        },
        update: function(userId, doc, fields, modifier) {
            return true;
        },
        remove: function (userId, doc){
            return true;
        },
        download: function () {
            return true;
        }
    });
});