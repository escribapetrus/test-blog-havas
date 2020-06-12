var postlist = new Vue({
    el: "#postlist",
    data: {
        posts: [],
        page: 1,
        perPage: 9,
        pages: [], 
    },
    methods: {
        getPosts: async function() {
            await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(d => {
                this.posts = d.data
            })
            .catch(err =>  console.log(err));
        },
        setPages: function() {
            let numberOfPages = Math.ceil(this.posts.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate: function(posts) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return  posts.slice(from, to);
        },
    },
    computed: {
        displayedPosts: function() {
            return this.paginate(this.posts);
        }
    },
    created(){
        this.getPosts()
    },
    watch: {
        posts () {
            this.setPages();
        }
    },
})