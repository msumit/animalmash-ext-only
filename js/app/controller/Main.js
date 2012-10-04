Ext.define('AM.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: ['All'],
	
    models: ['All'],
	
    views: ['LeftImage', 'RightImage', 'All'],
	
    refs: [
        {
            ref: 'leftImage',
            selector: 'leftImage'
        },
        {
            ref: 'rightImage',
            selector: 'rightImage'
        }
	],


    init: function() {
        this.store = this.getAllStore(); 
        this.store.load();
        
        if(this.store.getCount() === 0){
        
            for(var i=1; i<=60; i++){
                this.store.add({'image' : i+'.jpg', 'like' : 0});
            }
            this.store.sync();
        }

        this.control({
            'leftImage': {
                click: this.onImageClick
            },
            'rightImage': {
                click: this.onImageClick
            },
            'all': {
                beforeactivate: this.onViewChange
            }
        });
    },

    onLaunch: function(){
        this.loadImages();
    },

    onImageClick: function(field, imageId){
        this.saveLike(imageId);
        this.loadImages();
    },

    onViewChange: function(f, e){
        this.store.data.items.sort(function(a, b) {
            return b.data.like - a.data.like;
        });
        f.tpl.overwrite(f.body, this.store.data.items);
    },

    loadImages: function(){
        var rand1 = Math.floor((Math.random()*60) + 1);
        var rand2 = Math.floor((Math.random()*60) + 1);
        
        if(rand1 === rand2){
            rand1 = Math.floor((Math.random()*30) + 1);
            rand2 = rand1 + Math.floor((Math.random()*31));
        }

        this.getLeftImage().field.dom.src = 'images/' + rand1 + '.jpg';
        this.getLeftImage().field.dom.imageId = rand1;
        this.getRightImage().field.dom.src = 'images/' + rand2 + '.jpg';
        this.getRightImage().field.dom.imageId = rand2;    
    },

    saveLike: function(id){
        var row = this.store.getById(id);
        row.set('like', row.get('like')+1);    
        this.store.sync();
    }
});