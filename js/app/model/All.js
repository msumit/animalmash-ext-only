Ext.define('AM.model.All',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'image', type: 'string'},
        {name: 'like', type: 'int'}
    ],
    proxy: {
        type: 'localstorage',
        id: 'animalmash'
    }
});