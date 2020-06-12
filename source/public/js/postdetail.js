var postdetail = new Vue({
    el: "#postdetail",
    data: {
        post: {},
        moreLinks: []
    },
    methods: {
        getPost: async function(id) {
            await axios.get(`https://jsonplaceholder.typicode.com/posts${id}`)
            .then(d => {
                this.post = d.data
            })
            .catch(err =>  console.log(err));
        },
        getLinks: async function() {
            await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(d => {
                this.moreLinks = d.data.slice(0, 4)
            })
            .catch(err =>  console.log(err));
        },

    },
    created(){
        this.getPost(window.location.pathname)
        this.getLinks()
    },
})