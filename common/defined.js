var expert={};
//  接口地址
expert.url='http://123.56.192.14:10000';
//  cookie 存的
expert.cookie_key='_auth-expert-manager-token';
expert.name='_name';
expert.psd='_password';
//  是否记住用户名
expert.flag='flag';
//角色
expert.role='_role';
// 专家id
expert.id='_id';

//  修改密码用户角色
expert.roleZJ='1';

// 跳转路径
expert.homeUrl='/ectommZhuanjia/page/';
//  手机验证key
expert.phoneKey='e0tO15pZi0M';

//  分页每页条数
expert.pageSize=10;


//未处理
expert.Untreated='1';
//处理中
expert.Untreat='2';
// 已处理
expert.Already_processed='3';

//  状态码
var Success='OK';
// var weeor='OperationFail';

jQuery.extend({
//     删除cookie
    'destroy': function () {
        $.removeCookie(expert.cookie_key, {path: '/'});
        $.removeCookie(expert.name, {path: '/'});
        $.removeCookie(expert.psd, {path: '/'});
        $.removeCookie(expert.flag, {path: '/'});
        $.removeCookie(expert.role, {path: '/'});
        $.removeCookie(expert.id, {path: '/'});
    },
});

