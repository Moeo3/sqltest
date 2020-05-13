$(() => {
    $("#button-query").click(() => {
        console.log($('#ensgid').val());
        $.ajax({
            url: '/query',
            type: 'GET', 
            data: {
                ensgid: $('#ensgid').val()
            },
            dataType:'json',
            success(data) {
                console.log(data.rows);
                if (data.err) {
                    console.log('ajax error');
                } else {
                    console.log('ajax success');
                    localStorage.setItem("res", JSON.stringify(data.rows));
                    window.open('http://localhost:8080/result.html');
                }
            },
            error() {
                alert('error');
            }
        })
    })
})