Ext.define('AM.store.All', {
    extend: 'Ext.data.Store',
    model: 'AM.model.All',
    autoLoad: true,
    autoSync: true /*
    proxy: {
        type: 'localstorage',
        id: 'animalmash'
    },
    data: [
        {"id":1, "image":"1.jpg", "like":0},
        {"id":2, "image":"2.jpg", "like":0},
        {"id":3, "image":"3.jpg", "like":0},
        {"id":4, "image":"4.jpg", "like":0},
        {"id":5, "image":"5.jpg", "like":0},
        {"id":6, "image":"6.jpg", "like":0},
        {"id":7, "image":"7.jpg", "like":0},
        {"id":8, "image":"8.jpg", "like":0},
        {"id":9, "image":"9.jpg", "like":0},
        {"id":10, "image":"10.jpg", "like":0},
        {"id":11, "image":"11.jpg", "like":0},
        {"id":12, "image":"12.jpg", "like":0},
        {"id":13, "image":"13.jpg", "like":0},
        {"id":14, "image":"14.jpg", "like":0},
        {"id":15, "image":"15.jpg", "like":0},
        {"id":16, "image":"16.jpg", "like":0},
        {"id":17, "image":"17.jpg", "like":0},
        {"id":18, "image":"18.jpg", "like":0},
        {"id":19, "image":"19.jpg", "like":0},
        {"id":20, "image":"20.jpg", "like":0},
        {"id":21, "image":"21.jpg", "like":0},
        {"id":22, "image":"22.jpg", "like":0},
        {"id":23, "image":"23.jpg", "like":0},
        {"id":24, "image":"24.jpg", "like":0},
        {"id":25, "image":"25.jpg", "like":0},
        {"id":26, "image":"26.jpg", "like":0},
        {"id":27, "image":"27.jpg", "like":0},
        {"id":28, "image":"28.jpg", "like":0},
        {"id":29, "image":"29.jpg", "like":0},
        {"id":30, "image":"30.jpg", "like":0},
        {"id":31, "image":"31.jpg", "like":0},
        {"id":32, "image":"32.jpg", "like":0},
        {"id":33, "image":"33.jpg", "like":0},
        {"id":34, "image":"34.jpg", "like":0},
        {"id":35, "image":"35.jpg", "like":0},
        {"id":36, "image":"36.jpg", "like":0},
        {"id":37, "image":"37.jpg", "like":0},
        {"id":38, "image":"38.jpg", "like":0},
        {"id":39, "image":"39.jpg", "like":0},
        {"id":40, "image":"40.jpg", "like":0},
        {"id":41, "image":"41.jpg", "like":0},
        {"id":42, "image":"42.jpg", "like":0},
        {"id":43, "image":"43.jpg", "like":0},
        {"id":44, "image":"44.jpg", "like":0},
        {"id":45, "image":"45.jpg", "like":0},
        {"id":46, "image":"46.jpg", "like":0},
        {"id":47, "image":"47.jpg", "like":0},
        {"id":48, "image":"48.jpg", "like":0},
        {"id":49, "image":"49.jpg", "like":0},
        {"id":50, "image":"50.jpg", "like":0},
        {"id":51, "image":"51.jpg", "like":0},
        {"id":52, "image":"52.jpg", "like":0},
        {"id":53, "image":"53.jpg", "like":0},
        {"id":54, "image":"54.jpg", "like":0},
        {"id":55, "image":"55.jpg", "like":0},
        {"id":56, "image":"56.jpg", "like":0},
        {"id":57, "image":"57.jpg", "like":0},
        {"id":58, "image":"58.jpg", "like":0},
        {"id":59, "image":"59.jpg", "like":0},
        {"id":60, "image":"60.jpg", "like":0}
    ]
    //sorters: {property: 'like', direction: 'DESC'},
  */
});