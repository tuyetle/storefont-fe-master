const property = {
    images: [
        'https://storage.googleapis.com/images_of_an/img-1.jpg',
        'https://storage.googleapis.com/images_of_an/img-2.jpg',
        'https://storage.googleapis.com/images_of_an/img-3.jpg',
        'https://storage.googleapis.com/images_of_an/img-4.jpg',
        'https://storage.googleapis.com/images_of_an/img-5.jpg',
        'https://storage.googleapis.com/images_of_an/img-6.jpg',
    ],
    location: {
        lat: 16.0644,
        lng: 108.2022,
    },
    pointsOfInterest: [
        { lat: 16.0644, lng: 108.2005, type: 'bank' },
        { lat: 16.0624, lng: 108.1996, type: 'hospital' },
        { lat: 16.0650, lng: 108.2050, type: 'shopping' },
        { lat: 16.0666, lng: 108.2005, type: 'restaurant' },
        { lat: 16.0666, lng: 108.1996, type: 'school' },
        { lat: 16.0666, lng: 108.2040, type: 'restaurant' },
    ],
    address: 'An Dương Vương, Phường Phú Thượng, Quận Tây Hồ',
    title: 'Chung Cư Tây Hồ RiverView',
    price: 1500000000,
    transactionType: 'sell',
    createdDate: new Date(2018,1,10).toISOString(),
    expiredDate: new Date(2018,2,3).toISOString(),
    ads: {
        zoneId: '1',
        reviveId: '1',
        scriptSupported: '#',
    },
    description: `Bán dãy phố 4 tầng 4x18-3.4 tỷ-Hỗ trợ vay NH 70%-0902331665
        -DTXD: 4mx18m
        -DTSD: 290m2

        Kết cấu: 1PK+4PN+5WC(WC trong phòng), có giếng trời sân sau thoáng mát, nội thất gỗ cao cấp, sàn lót gach bóng kiếng 2 da 80 vuông, ốp tường tầng trệt 1m2, có gắn kệ bếp gỗ cao cấp, các đường dây: máy lạnh, máy giặt, máy nước nóng, truyền hình cáp... đều đi dây âm, hệ thống điện trong nhà tất cả đều là bóng LED, kiến trúc Châu Âu hiện đại.

        Vị trí: gần chợ, trường học, bv, hẻm rộng 10m, cực kì thông thoáng, cách đại lộ Đông Tây 200m, ra Q5, Q1, Q11, METRO BÌNH PHÚ chỉ mất 15 phút, gần Chợ Lớn rất tiện cho thương buôn Chợ Lớn mua nhà để ở và chứa hàng...

        Hẻm rộng 10m cực kì thông thoáng.

        Khu dân cư hiện hữu, cực kì an ninh, yên tĩnh, dân trí cao
        Giá bán: 3.4 tỷ
        Hỗ trợ vay NH 70% lãi suất ưu đãi
        Ngoài ra công ty chúng tôi còn xây dựng nhiều dãy nhà với nhiều mức giá khác nhau cho quý khách hàng lựa chọn:
        -3.5x17-trệt 1 lầu-đường 3m- cách hậu giang 50m-2.5 tỷ
        -3.2x20-mặt tiền MINH PHỤNG-5.1 tỷ
        -3.3x15-trệt 2 lầu-2.1 tỷ
        -3.5x17-trệt 2 lầu 1 sân thượng-mặt tiền chợ Bình Tiên- 5 tỷ

        Liên hệ trực tiếp chủ đầu tư: 0902331665-MR_TRUNG
    `,
    suggestions: [
        {
            id: '1',
            title: 'Vincome',
            address: '1 Đồng khởi',
            area: 80,
            bathRoom: 2,
            bedRoom: 3,
            price: 2000000,
            showImage: true,
            subTitle: '',
            img: 'https://storage.googleapis.com/images_of_an/img-3.jpg',
        },
        {
            id: '2',
            title: 'Copac',
            address: '12 Tôn đản',
            area: 200,
            bathRoom: 1,
            bedRoom: 2,
            price: 2000000,
            showImage: true,
            subTitle: '',
            img: 'https://storage.googleapis.com/images_of_an/img-1.jpg',
        },
        {
            id: '3',
            title: 'Topac',
            address: 'Khu Trung Sơn',
            area: 120,
            bathRoom: 1,
            bedRoom: 3,
            price: 2000000,
            showImage: true,
            subTitle: '',
            img: 'https://storage.googleapis.com/images_of_an/img-2.jpg',
        },
        {
            id: '4',
            title: 'Era Town',
            address: '15B, Phú Mỹ',
            area: 120,
            bathRoom: 1,
            bedRoom: 3,
            price: 2000000,
            showImage: true,
            subTitle: '',
            img: 'https://storage.googleapis.com/images_of_an/img-2.jpg',
        },
        {
            id: '5',
            title: 'Belleza',
            address: 'Phạm Hữu Lầu',
            area: 120,
            bathRoom: 1,
            bedRoom: 3,
            price: 2000000,
            showImage: true,
            subTitle: '',
            img: 'https://storage.googleapis.com/images_of_an/img-2.jpg',
        },
    ],
    contact: {
        address: '12 Tôn Đản, P.13, Q.4, HCM',
        name: 'Huỳnh Khiêm Khiêm',
        phone: '01212667766',
        company: 'Halstead Property',
    },
    attributeValue: {
        shortDescriptionAttributes: [
            { name: 'home', displayName: 'Nhà mặt tiền' },
            { name: 'direction', displayName: 'Hướng Đông Bắc'},
            { name: 'riverside', displayName: 'Ven sông'},
            { name: 'district', displayName: 'Trung tâm quận 10'},
        ],
        mainAttributes: [
            { name: 'area', displayName: 'Diện tích', value: 65, addon: 'm2', isChecked: true },
            // { name: 'people', displayName: 'Người', value: '2-4', isChecked: true },
            { name: 'bedrooms', displayName: 'Phòng ngủ', value: 3, isChecked: true },
            { name: 'bathrooms', displayName: 'Phòng tắm', value: 2, isChecked: true },
        ],
        secondaryAttributes: [
            { name: 'legaldocument', displayName: 'Hồ sơ pháp lý', value: 'pinkCertificate' },
            { name: 'direction', displayName: 'Hướng', value: 'northWest' },
            { name: 'floors', displayName: 'Số tầng', value: 4 },
        ],
        utilities: [
            { id: '13', name: 'swimmingpool', displayName: 'Hồ bơi', isChecked: true },
            { id: '14', name: 'washingmachine', displayName: 'Máy giặt', isChecked: true },
            { id: '15', name: 'wifi', displayName: 'Wifi', isChecked: true },
            { id: '16', name: 'garden', displayName: 'Sân vườn', isChecked: false },
            { id: '17', name: 'fullfurniture', displayName: 'Đầy đủ nội thất', isChecked: true },
            { id: '18', name: 'airconditioner', displayName: 'Điều hòa', isChecked: true },
            { id: '19', name: 'balcony', displayName: 'Ban công', isChecked: false },
            { id: '20', name: 'gym', displayName: 'Phòng tập Gym', isChecked: true },
            { id: '21', name: 'opticalfiberinternet', displayName: 'Internet cáp quang', isChecked: true },
            // { id: '22', name: 'supermarket', displayName: 'Siêu thị', isChecked: true },
            // { id: '23', name: 'school', displayName: 'Trường học', isChecked: false },
            // { id: '24', name: 'beach', displayName: 'Gần biển', isChecked: false },
            // { id: '25', name: 'hospital', displayName: 'Bệnh viện', isChecked: false },
            // { id: '26', name: 'park', displayName: 'Công viên', isChecked: false },
            // { id: '27', name: 'temple', displayName: 'Gần chùa', isChecked: false },
            // { id: '28', name: 'publictraffic', displayName: 'Giao thông công cộng', isChecked: false },
            // { id: '29', name: 'safetyarea', displayName: 'Khu vực an ninh', isChecked: false },
            // { id: '30', name: 'church', displayName: 'Gần nhà thờ', isChecked: false },
        ],
    },
};

export default property;
