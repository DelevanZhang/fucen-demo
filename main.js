$('#cilickMe').on('click', function (e) {
    if ($('.float')[0].style.display === 'block') {
        $('.float').hide();
        console.log('111');
        e.stopPropagation()

    } else {
        $('.float').show();
        console.log('222');
        e.stopPropagation()
        setTimeout(function () {
            $(document).one('click', function () {
                $('.float').hide();
                console.log('333')
            })
        }, 0)


    }

})
$('.float').on('click', function (e) {
    e.stopPropagation()
    console.log('444')
})