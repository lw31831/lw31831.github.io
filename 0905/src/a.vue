<template>
	<div class="wra">
		<div v-for="(i,$index) in arr">
			<div class="item" @click="btn($index)" :class="index==$index?'active-item':'item'">
				{{i.title}}
			</div>
			<div class="text" :class="index==$index?'active-text':'text'">
				{{i.text}}
			</div>
		</div>
	</div>
</template>
	
<script>
	export default{
		data(){
			return {
				arr:[
					{title:'1',text:'111'},
					{title:'2',text:'222'},
					{title:'3',text:'333'},
					{title:'4',text:'444'},
					{title:'5',text:'555'}
				],
				index:-1
			}
		},
		methods:{
			btn(n){
				if(this.index==n){
					this.index = -1
				}else{
					this.index = n
				}
			}
		}
	}
</script>

<style>
	.wra{
		width: 800px;
		margin: 0 auto;
	}
	.item{
		width: 800px;
		height: 60px;
		line-height: 60px;
		font-size: 22px;
		text-align: center;
		background-color: gray;
	}
	.text{
		width: 700px;
		padding: 0 50px;
		height: 0;
		transition: all 0.35s;
		background-color: #ccc;
		overflow: hidden;
	}
	.active-item{
		background-color: lime;
	}
	.active-text{
		height: 100px;
	}
</style>
