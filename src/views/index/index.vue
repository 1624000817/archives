<template>
    <el-main>
      <div class="con">
        <div class="conTop">
          <div class="conTopL">首页</div>
          <div class="conTopR">
            <div class="conTopRDiv">
              登录ip：
              <font class="conTopRDivC">100.0.0.0</font>
            </div>
            <div class="conTopRDiv">
              登录地点：
              <font class="conTopRDivC">无锡新区</font>
            </div>
            <div class="conTopRDiv">
              登录时间：
              <font class="conTopRDivC">2020-10-12</font>
            </div>
            <div class="conTopRDiv">
              登录者：
              <font class="conTopRDivC">张三</font>
            </div>
          </div>
        </div>
        <div class="conBottom">
          <div class="conBottomTop">
            <ul>
              <li>
                <div class="conBottomTopImg">
                  <img src="../../../static/i3a.png" />
                </div>
                <div class="conBottomTopDiv">
                  <div class="conBottomTopDivTop">即存档案数</div>
                  <div class="conBottomTopDivBottom">80000</div>
                </div>
              </li>
              <li>
                <div class="conBottomTopImg">
                  <img src="../../../static/i3b.png" />
                </div>
                <div class="conBottomTopDiv">
                  <div class="conBottomTopDivTop">系统访问量</div>
                  <div class="conBottomTopDivBottom">10080</div>
                </div>
              </li>
              <li>
                <div class="conBottomTopImg">
                  <img src="../../../static/i3c.png" />
                </div>
                <div class="conBottomTopDiv">
                  <div class="conBottomTopDivTop">开放目录数</div>
                  <div class="conBottomTopDivBottom">8000</div>
                </div>
              </li>
              <li>
                <div class="conBottomTopImg">
                  <img src="../../../static/i3d.png" />
                </div>
                <div class="conBottomTopDiv">
                  <div class="conBottomTopDivTop">系统访问量</div>
                  <div class="conBottomTopDivBottom">8000</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="conBottomBottom">
            <div class="conBottomBottomDiv">
              <div class="conBottomBottomDivTop">新增档案数（一周）</div>
              <div class="conBottomBottomDivBottom">
                <img
                  src="../../../static/conicon1.png"
                  class="conBottomBottomDivBottomImg"
                />
              </div>
            </div>
            <div class="conBottomBottomDiv marginR">
              <div class="conBottomBottomDivTop">档案点阅类别占比（一周）</div>
              <div class="conBottomBottomDivBottom">
                <img
                  src="../../../static/conicon2.png"
                  class="conBottomBottomDivBottomImg"
                />
              </div>
            </div>
          </div>
          <div class="conBottomBottom">
            <div class="conBottomBottomDiv">
              <div class="conBottomBottomDivTop">
                客户自助调阅访问数（一周）
              </div>
              <div class="conBottomBottomDivBottom">
                <img
                  src="../../../static/conicon3.png"
                  class="conBottomBottomDivBottomImg"
                />
              </div>
            </div>
            <div class="conBottomBottomDiv marginR">
              <div class="conBottomBottomDivTop">档案下载数（一周）</div>
              <div class="conBottomBottomDivBottom">
                <img
                  src="../../../static/conicon4.png"
                  class="conBottomBottomDivBottomImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main> 

</template>

<style scoped>
    .con {
    width: 100%;
    height: auto;
}

.conTop {
    width: 100%;
    height: 5.625rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.875rem;
    color: #666666;
    border-bottom: 1px solid #cccccc;
}

.conTopL {
    float: left;
    width: auto;
    height: 5.625rem;
    padding-left: 2%;
    line-height: 5.625rem;
}

.conTopR {
    float: right;
    width: 81%;
    height: 5.625rem;
    padding-right: 2%;
}

.conTopRDiv {
    float: right;
    width: auto;
    height: 5.625rem;
    margin-left: 3%;
    line-height: 5.625rem;
}

.conTopRDivC {
    font-size: 1.125rem;
    font-weight: bold;
}

.conBottom {
    width: 100%;
    height: auto;
    padding-top: 1.25rem;
}

.conBottomTop {
    width: 100%;
    height: 6.25rem;
    margin-bottom: 1.25rem;
    background-color: #ffffff;
    border-radius: 0.3125rem;
}

.conBottomTop li {
    float: left;
    width: 24.90%;
    height: 3.75rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    padding-left: 6%;
    border-right: 1px solid #cccccc;
}

.conBottomTop :nth-child(4){
    border-right: 0;
}

.conBottomTopImg {
    float: left;
    width: 3.75rem;
    height: 3.75rem;
    margin-right: 10%;
}

.conBottomTopImg img {
    width: 100%;
    height: 100%;
}

.conBottomTopDiv {
    float: left;
    width: auto;
    height: 3.75rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #333333;
}

.conBottomTopDivTop {
    width: auto;
    height: 1.875rem;
    line-height: 1.875rem;
    font-size: 1.125rem;
}

.conBottomTopDivBottom {
    width: auto;
    height: 1.875rem;
    line-height: 1.875rem;
    font-size: 1.75rem;
}

.conBottomBottom {
    width: 100%;
    height: 21.25rem;
    margin-bottom: 1.25rem;
    border-radius: 0.3125rem;
}

.marginR {
    margin-right: 0 !important;
}

.conBottomBottomDiv {
    float: left;
    width: 49.375%;
    height: 100%;
    padding-left: 3.125rem;
    padding-right: 3.125rem;
    margin-right: 1.25%;
    background-color: #ffffff;
    border-radius: 0.3125rem;
}

.conBottomBottomDivTop {
    float: left;
    width: 100%;
    height: 3.75rem;
    line-height: 3.75rem;
    padding-left: 1.25rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    color: #333333;
    border-bottom: 1px solid #cccccc;
}

.conBottomBottomDivBottom {
    float: left;
    width: 100%;
    height: 17.5rem;
}

.conBottomBottomDivBottomImg {
    width: 100%;
    height: 100%;
}



</style>
