// $(function (){
//     $('#getProducts').on('click',  () => {
//         $.ajax({
//             url: 'products',
//             success: function (products) {
//                 let tbody = $('tbody');
//                 tbody.html = ('');
//                 products.forEach(product => {
//                     tbody.append(`
//                     <tr>
//                         <td class="FN">${product.FirstName + ' ' + product.LastName}</td>
//                         <td>${product.Email}</td>
//                         <td><input type="text" class="PR" value="${product.Product}"/></td>
//                         <td>${product.ProductType}</td>
//                         <td>${product.Price}</td>
//                         <td>
//                             <button class="update-button">Update</button>
//                             <button class="delete-button">Delete</button>
//                         </td>
//                     </tr>
//                     `)
//                 })
//             }
//         })
//     })

//     $('#sellform').on('submit', function (e){
//         e.preventDefault(); 
//         let newN = $('#FN');
//         let newL = $('#LN');
//         let newE = $('#EM');
//         let newP = $('#PN');
//         let newPT = $('#PT');
//         let newPC = $('#PC');

//         $.ajax({
//           url: '/products',  
//           method: 'POST',
//           data: {
//               FirstName: newN.val(),
//               LastName: newL.val(),
//               Email: newE.val(),
//               Product: newP.val(),
//               ProductType: newPT.val(),
//               Price: newPC.val()
//           },
//           success: function (response) {
//               $('#getProducts').click();
//           }
//         })
//     });
    
//     $('table').on('click', '.update-button', function() {
//         let row = $(this).closest('tr');
//         let FN = row.find('.FN').text();
//         let PR = row.find('.PR').val();

//         $.ajax({
//             url: "/products/" + FN,
//             method: 'PUT',
//             data: {
//                 PR: PR
//             },
//             success: function (response) {
//                $('#getProducts').click();
//             console.log(response);
//             }
//         })
//     })
//     $('table').on('click', '.delete-button', function () {
//         let row = $(this).closest('tr');
//         let PR = row.find('.PR').text();
//         let FN = row.find('.FN').text();

//         $.ajax({
//             url: '/products/' + FN,
//             method: 'DELETE',
//             success: function (response) {
//                 console.log(response);
//                 $('#getProducts').click();
//             }
//         })
//     })
// })

$(function () {

    const URI = '/api/products';
  
    // GET PRODUCTS
    $('#getProducts').on('click', () => {
      $.ajax({
        url: URI,
        success: function (products) {
          let tbody = $('tbody');
          tbody.html('');
          products.forEach(product => {
            tbody.append(`
                <tr>
                  <td class="id">${product.id}</td>
                  <td>
                    <input type="text" class="name" value="${product.name}"/>
                  </td>
                  <td>
                    <button class="update-button">UPDATE</button>
                    <button class="delete-button">DELETE</button>
                  </td>
                </tr>
            `)
          })
        }
      });
    });
  
    // POST PRODUCTS
    $('#productForm').on('submit', (e) => {
      e.preventDefault();
      let newProduct = $('#newProduct');
  
      $.ajax({
        url: URI,
        method: 'POST',
        data: {
          name: newProduct.val()
        },
        success: function(response) {
         newProduct.val('');
         $('#getProducts').click();
        },
        error: function (err) {
          console.log(err);
        }
      });
    });
    
    $('table').on('click', '.update-button', function() {
      let row = $(this).closest('tr');
      let id = row.find('.id').text();
      let name = row.find('.name').val();
  
      $.ajax({
        url: `${URI}/${id}`,
        method: 'PUT',
        data: {
          name: name 
        },
        success: function(response) {
          console.log(response);
          $('#getProducts').click();
        }
      });
    });
  
    $('table').on('click', '.delete-button', function() {
      let row = $(this).closest('tr');
      let id = row.find('.id').text();
  
      $.ajax({
        url: `${URI}/${id}`,
        method: 'DELETE',
        success: function (response) {
         $('#getProducts').click();
        }
      });
    });
  
  });
  