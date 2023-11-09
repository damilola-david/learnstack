<template>
    <button>
        <slot></slot>
    </button>
</template>
<style lang="scss" scoped>
button{
    width: 180px;
    height: 60px;
    background-color: rgb(47, 248, 6);
    border: 2px solid #000;
    border-radius: 10px;
    font-size: 20px;
    //display: flex;
    align-items: center;
    justify-content: center;
}
button:hover{
    cursor: pointer;
}
</style>
<script>
export default{

}
</script>