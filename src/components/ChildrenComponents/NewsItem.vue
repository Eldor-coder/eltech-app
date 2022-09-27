<template>
  <div class="container">
        <the-router :routerProps="{pageName1 : 'Новости', pageName2 : news.title, pageName3 : ''}"></the-router>
    <div class="news">
            <h2 class="news__title">
                {{news.title}}
            </h2>
            <div class="news__body">
                <div class="news__text col-7">
                    <p class="news__subtitle">
                        {{news.description}}
                    </p>
                    <br>
                    <p class="news__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dignissimos dolores expedita iste cum. Commodi, esse blanditiis placeat officia numquam similique. Nostrum suscipit tenetur, magnam quam amet sunt id dicta culpa iste ullam. Ipsa doloribus beatae illo. Doloremque magnam nam quasi illo magni, culpa quibusdam dicta tempore? Ex perferendis ut repellat exercitationem laudantium totam, ab molestias in, neque voluptates fugit rem, itaque atque? Quasi, accusamus eligendi laboriosam, deleniti quod, quia odio autem maxime culpa reprehenderit sunt necessitatibus doloremque voluptatum odit iusto ipsum. Eum autem fugit laboriosam sunt aliquid vel, omnis eligendi architecto quidem, ea ducimus pariatur iste praesentium, sequi tempore assumenda? Reiciendis sequi ipsam consequatur nulla rem ab blanditiis, cum cumque quas in enim dolor possimus architecto? Omnis architecto sint doloremque aspernatur quas. Saepe cupiditate voluptatem tempora consequatur numquam voluptatum quo, repellat reprehenderit libero consequuntur perspiciatis quisquam id! Facilis, rem iusto dignissimos inventore eaque esse, tempora sapiente reprehenderit quidem error eveniet. Deserunt corporis eius delectus hic maxime animi error, illo iure, nihil accusantium laborum temporibus dicta ratione perferendis officia! Tenetur, ducimus impedit. Dolorem minus nam eius excepturi harum quia exercitationem quaerat magnam fugit aliquam? Laudantium cumque totam delectus illo eveniet, iusto quidem qui exercitationem dignissimos ad neque magni adipisci iste necessitatibus eum sed molestiae nihil facere corrupti ipsum quae animi deleniti doloremque in! Expedita, ipsa. Dolor cumque nisi, sit officiis dolorum deleniti nemo voluptatibus earum, eum nulla fugiat dolore expedita natus eos distinctio inventore consectetur accusamus officia. Atque excepturi vero adipisci qui corrupti commodi repellat eaque nesciunt, eligendi ducimus esse!
                    </p>
                </div>
                <div class="news__right col-5" >
                    <div class="news__right--img"
                        v-if="news.urlToImage"
                        :style="{ backgroundImage: 'url(' + news.urlToImage + ')' }"
                    >
                    </div>
                    <img v-else src="../../assets/images/logo.svg" alt="">
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import TheRouter from '@/components/TheRouter'

export default {
    data() {
        return {
            news : {},
            id : null,
            currentName : '',
            lastName : ''
            
        }
    },
    components : {
        TheRouter
    },
    computed : {
       getNews(){
            return this.$store.getters.getNews
        }
    },
    watch : {
         
    },
    created(){
        this.$store.dispatch('getNews')
        const newsID = this.$route.params.newsID
        
        this.id = newsID
        const selectedNews = this.getNews[this.id]
        this.news = selectedNews

        this.$store.dispatch('setMore')
    }
}
</script>

<style lang="scss" scoped>
    @import '../../styles/Components/NewsItem'
</style>