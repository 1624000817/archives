<template>
  <el-container>
    <el-aside>
      <div class="menu">
        <ul>
          <li>
            <div class="menuIcon">
              <img src="../../../static/menu1.png" />
            </div>
            <div class="menuM">B端用户管理</div>
          </li>
          <li>
            <div class="menuIcon">
              <img src="../../../static/menu2.png" />
            </div>
            <div class="menuM">目录管理</div>
          </li>
          <li>
            <div class="menuIcon">
              <img src="../../../static/menu3.png" />
            </div>
            <div class="menuM">审批记录</div>
          </li>
          <li>
            <div class="menuIcon">
              <img src="../../../static/menu4.png" />
            </div>
            <div class="menuM">资源管理</div>
          </li>
          <li>
            <div class="menuIcon">
              <img src="../../../static/menu5.png" />
            </div>
            <div class="menuM">角色权限管理</div>
          </li>
          <li>
            <div class="menuIcon">
              <img src="../../../static/menu6.png" />
            </div>
            <div class="menuM">搜索记录</div>
          </li>
          <li>
            <div class="menuIcon">
              <img src="../../../static/menu7.png" />
            </div>
            <div class="menuM">系统日志</div>
          </li>
          <li>
            <div class="menuIcon">
              <img src="../../../static/menu8.png" />
            </div>
            <div class="menuM">C端用户管理</div>
          </li>
        </ul>
      </div>
    </el-aside>
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
  </el-container>
</template>
