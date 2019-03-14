const products = [{
    key: 1,
    id: 1,
    name: 'Top Listing',
    type: 1,
    price: 550000,
    discountPrice: 175000,
    sum: 375000,
    startDate: '2017/1/1',
    endDate: '2017/1/1',
    features: ['Xuất hiện tại vị trí đầu trang Search. Hiệu quả gấp 4 lần tin Premium'],
    subTitle: 'TOP',
    showImage: true,
    lowBalance: true,
},
{
    key: 2,
    id: 2,
    name: 'Premium Listing',
    type: 2,
    price: 110000,
    discountPrice: 0,
    sum: 110000,
    startDate: '2017/1/1',
    endDate: '2017/1/1',
    features: ['Xuất hiện dưới tin Top, nổi bật so với tin đănt Express có hình đại diện trong danh sách tìm kiếm và nhiều hình trong trang chi tiết'],
    subTitle: '',
    showImage: true,
    lowBalance: true,
},
{
    key: 3,
    id: 3,
    name: 'Express Listing',
    type: 3,
    price: 50000,
    discountPrice: 0,
    sum: 50000,
    startDate: '2017/1/1',
    endDate: '2017/1/1',
    features: ['Hiển thị dưới tin Premium với ruy băng màu đỏ, không có hình đại diện trong danh sách tìm kiếm. Có nhiều hình trong trang chi tiết tin đăng'],
    subTitle: 'Express',
    showImage: false,
    lowBalance: false,
},
{
    key: 4,
    id: 4,
    name: 'Basic Listing',
    type: 4,
    price: 10000,
    discountPrice: 0,
    sum: 10000,
    startDate: '2017/1/1',
    endDate: '2017/1/1',
    features: ['Hiển thị trong danh sách tìm kiếm với tiêu màu đen. Không có hình đại diện trong danh sách tìm kiếm. Chỉ hiển thị 1 hình ảnh minh họa bất động sản tại trang chi tiết'],
    subTitle: '',
    showImage: false,
    lowBalance: false,
},
];

export default products;