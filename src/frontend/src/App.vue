<template>
    <div class="main">
        <section class="mheader">
            <img src="./assets/logo.png" alt="" srcset="" />
        </section>
        <nav>
            <router-link class="nav-item center" to="/">Home</router-link>
            <router-link class="nav-item center" to="/project">Project</router-link>
            <router-link class="nav-item center" to="/module">Module</router-link>
        </nav>
        <router-view class="right-content"></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
.main{
    height: 100%;
    display: flex;
    flex-wrap:wrap;
}
.mheader{
    height: 49px;
    border-bottom: 1px solid;
    vertical-align: middle;
    border-color: var(--orange-peel);
    flex: 0 0 100%;
}
.mheader img{
    margin-left: 75px;
}

nav{
    flex: 0 0 200px;
    border-right: 1px solid;

      border-color: var(--orange-peel);
    height: calc(100% - 50px);
}
.nav-item{
    display: inline-block;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid;
      border-color: var(--orange-peel);
    color:var(--tiffany-blue)
}
.right-content{
        /* 此处解释下
        flex: 1 1 0%
        0%表示此处宽度是按照自身内容宽度来，此处自身内容宽度为0，但是分配剩余的空间，所以可以自适应变化
         */
        flex: 1; /* 随父级变化 */
    height: calc(100% - 50px);
        padding: 10px;
}
</style>
