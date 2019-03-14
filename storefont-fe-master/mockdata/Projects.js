const result = [
    {
        id: '1',
        name: 'Copac Tôn Đản',
        category: {
            categoryId: '3',
            subCategoryId: '5',
            attributeValues: {
                area: '12',
                numberOfBathroom: '1',
            },
        },
        geo: {
            cityId: '2',
            districtId: '3',
            wardId: '5',
            googleAddress: {
                address: '12 Tôn Đản, Quận 4, Tp. Hồ Chí Minh, Việt Nam',
                addressHidden: false,
                marker: {
                    lat: 10.7622735,
                    lng: 106.70770809999999,
                }
            }
        },
        pictures: [
            {
                id: 'picture1',
                name: 'picture1.jpg',
                size: 1000,
                default: true,
                originalFile: 'http://www.muabannhadat.vn/du-an-vip/images/vip/can-ho-imperial-plaza.jpg',
            },
            {
                id: 'picture2',
                name: 'picture2.jpg',
                size: 1000,
                default: false,
                originalFile: 'http://www.muabannhadat.vn/uploads/images/005/190/471/S1tWoPbXnkuhXFY7IABEYg_2.jpg',
            },
        ],
    },
];

export default result;
