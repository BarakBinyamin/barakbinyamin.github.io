<template>
	<transition name="dropdown">
        <div class="dropdown-container" v-if="show && window.width<600">
            <router-link active-class="selected" class="navigation-link" 
                :to="`/`">
                home
            </router-link>
            <router-link active-class="selected" class="navigation-link" 
                v-for="link in links" :key="link" :to="`/${link}`">
                {{link}}
            </router-link>
            <bottom/>
        </div>
	</transition>
</template>

<script>
import bottom from "../footer/index.vue"

export default {
    name: 'dropdown',
    components: {bottom},
    props : ['links', 'show'],
        data() {
        return {
            window: {
                width: 0,
                height: 0
            },
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        console.log(this.links)
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    },
}
</script>

<style scoped>
.dropdown-container{
	z-index               : 99;
	position              : absolute;
	display               : grid;
	grid-template-columns : auto;
    align-items           : center;
    align-content         : start;
    justify-items         : center;
    grid-gap              : 15px;
	width                 : 100%;
    height                : 100%;
	overflow              : hidden;
    /* border-top: solid; */
    border-width: 1px;
    transform-origin: top;
    background-color: white;
    left:0;
    padding-top: 50px;
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity .3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}

.navigation-link {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-self: center;
    text-decoration: none;
    font-weight: 300;
    height: 100%;
    color: #626262;
    text-transform: UPPERCASE;
}


</style>
