var expert={};
//  接口地址
expert.url='http://123.56.192.14:10000';

//图片地址
expert.ImgUrl='http://123.56.192.14:13000/';
//  cookie 存的
expert.cookie_key='_auth-expert-manager-token';
expert.name='_name';
expert.psd='_password';
// expert.loginname='loginname';
//  是否记住用户名
expert.flag='flag';
//角色
expert.role='_role';
// 专家id
expert.id='_id';

//全部
expert.all='-1';
//新请求
expert.new='1';
//已会诊
expert.consultationed='2';

//新请求
expert.newData='新请求';
//已处理
expert.handled='已处理';
// 处理中
expert.consultation='处理中';


// 常用建议
expert.proposal='2';
//我的建议
expert.MyProposal='3';
//常用诊断
expert.diagnosis='0';
// 我的诊断
expert.MyDiagnosis='1';


//  用来区分常用建议和诊断 模板
//建议
expert.isProposal='Proposal';
// 诊断
expert.isDiagnosis='Diagnosis';


// 添加诊模板
expert.addDiagnosis='1';
//添加建议模板
expert.addProposal='2';

//  修改密码用户角色
expert.roleZJ='1';

// 跳转路径
expert.homeUrl='/page/';
//  手机验证key
expert.phoneKey='e0tO15pZi0M';

//  分页每页条数
expert.pageSize=10;

//  状态码
var Success='OK';
// var weeor='OperationFail';

//  收到新消息
expert.newTalkMessage='NewTalkMessage';

//  聊天角色
expert.doctorer=0; //医生
expert.experter=1; //专家
expert.CustomerServiceer=2;  //客服
expert.helper=5;  //心电助手
expert.notice=6;   //系统通知

// 正在会诊中状态
expert.consultationing=5;  // 可以聊天



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

