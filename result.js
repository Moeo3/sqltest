$(() => {
    let res = JSON.parse(localStorage.getItem("res"));
    console.log(res);
    let tbody = "";
    $.each(res, (idx, item) => {
        if (idx === 0) {
            $.each(item, (key) => {
                tbody += '<th>' + key + '</th>';
            })
        }
        tbody += '<tr>';
        $.each(item, (key, val) => {
            tbody += '<td>' + val + '</td>';
        })
        tbody += '</tr>';
        console.log(tbody);
    })
    console.log(tbody);
    $("#replace").replaceWith('<tbody>' + tbody + '</tbody>'); 
});