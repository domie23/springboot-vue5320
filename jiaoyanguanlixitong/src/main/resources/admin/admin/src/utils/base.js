const base = {
    get() {
        return {
            url : "http://localhost:8080/jiaoyanguanlixitong/",
            name: "jiaoyanguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiaoyanguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校教师教研信息填报系统"
        } 
    }
}
export default base
