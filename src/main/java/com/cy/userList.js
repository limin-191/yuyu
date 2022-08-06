
// 开启修改窗口
$("#upda").click(function () {
    $("#UsView").show();
})


// 点击返回按钮，关闭修改窗口
$("#usReturn").click(function () {
    $("#UsView").hide();

})



$("#usUpda").click(function () {
    upda();
})

function upda() {
    $.ajax({
        url:'userUp',
        data:{"uid":$("#uid1").val(),
            "Mailboxes":$("#Mailboxes1").val(),
            "phone":$("#phone1").val(),
            "uName":$("#uName1").val(),
            "sName":$("#sName1").val()},
        dataType:'json',
        success:function(msg) {
            alert(msg);
            if(msg==1){
                alert("修改成功！")
            }else {
                alert("修改失败！")
            }
        },
        error:function () {
            console.log("hail")
        }
    })

}




// 开启修改窗口
$("#addUs").click(function () {
    $("#usAddView").show();
})


// 点击返回按钮，关闭修改窗口
$("#usReturn1").click(function () {
    $("#usAddView").hide();

})



$("#usAdd1").click(function () {
    addUs();
})

function addUs() {
    $.ajax({
        url:'userAdd',
        data:{
            "acc":$("#userAcc2").val(),
            "Mailboxes":$("#Mailboxes2").val(),
            "phone":$("#phone2").val(),
            "uName":$("#uName2").val(),
            "sName":$("#sName2").val(),
            "pwd":$("#pwd2").val()
        },
        dataType:'json',
        type:"post",
        success:function(msg) {
            alert(msg);
            if(msg==1){
                alert("添加成功！")
            }else {
                alert("添加失败！")
            }
        },
        error:function () {
            console.log("hail")
        }
    })

}
