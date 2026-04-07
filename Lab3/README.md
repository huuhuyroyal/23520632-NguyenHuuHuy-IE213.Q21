# Lab 3

## Bài 1. Thiết lập định tuyến cho các thao tác với review trong ứng dụng minh họa

- 1.1 Định tuyến này sẽ có đường dẫn cuối cùng là /review
- 1.2 Thiết lập định tuyến thêm review (POST)
- 1.3 Thiết lập định tuyến sửa review (PUT)
- 1.4 Thiết lập định tuyến xoá review (DELETE)

<img src ="./images/image1.png">

## Bài 2. Thiết lập Controller cho Reviews

### 2.1 Tạo tệp tin reviews.controller.js trong thư mục api chứa class ReviewsController để quản lý các yêu cầu liên quan đến review.

Tệp tin review.controller.js
<img src = "./images/image2.png">

### 2.2 Import nội dung từ tệp reviewDAO.js

Lệnh import
<img src ="./images/image3.png">

### 2.3 Tạo phương thức apiPostReview()

<img src ="./images/image4.png">

### 2.4 Tạo phương thức apiUpdateReview()

<img src = "./images/image5.png">

### 2.5 Tạo phương thức apiDeleteReview()

<img src ="./images/image6.png">

## Bài 3. Thiết lập DAO cho reviews

### 3.1 Trong thư mục dao khởi tạo reviewsDAO.js. Import package mongodb, tạo ObjectID và tạo biến reviews để tham chiếu tới collection reviews sẽ tạo sau trên DB

<img src ="./images/image7.png">

### 3.2 Tạo phương thức injectDB() để kết nối tới collection trên DB

<img src ="./images/image8.png">

### 3.3 Tạo phương thức addReview() để thêm reviews vào DB

<img src = "./images/image9.png">

### 3.4 Tạo phương thức updateReview() để sửa review trên DB

<img src = "./images/image10.png">

### 3.5 Tạo phương thức deleteReview() để xóa review khỏi DB

<img src ="./images/image11.png">

### 3.6 Thử nghiệm các API

<img src = "./images/image12.png">
<img src = "./images/image13.png">
<img src = "./images/image14.png">

## Bài 4. Hoàn thành back-end cho ứng dụng minh họa

### 4.1 Thêm 2 định tuyến mới (định tuyến lấy tất cả thông tin phim dựa trên ID và định tuyến lấy tất cả loại rating của phim)

<img src ="./images/image15.png">

### 4.2 Thêm 2 phương thức apiGetMovieById() và apiGetRatings() vào movies.controller.js.

<img src = "./images/image16.png">

### 4.3 Thêm 2 phương thức getMovieById() và getRatings() vào moviesDAO.js.

<img src = "./images/image17.png">

### 4.4 Thử nghiệm các API

<img src = "./images/image18.png">
<img src = "./images/image19.png">
