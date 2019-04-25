<template>
    <section class="bg-light" id="documentation">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Documentation</h2>
          <h3 class="section-subheading text-muted">You can research antuhing you'd like to know about Amigo.com.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 documentation-item" v-for="(obj, key) in documentationJSON" :key="key">
          <a class="documentation-link" data-toggle="modal" href="#documentationModal1">
            <div class="documentation-hover">
              <div class="documentation-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="../assets/img/documentation/01-thumbnail.jpg" alt="">
          </a>
          <div class="documentation-caption">
            <h4>{{ obj.title }}</h4>
            <p class="text-muted">{{ obj.caption }}</p>
          </div>
        </div>
        
    
      </div>
    </div>
  </section>

</template>
<script>
export default {
    name : 'Documentation',
    data: () =>({
        documentationJSON :[
            {
            img :'something/random/img.jpg',
            caption:'Learn how to create an account',
            title:'Registration'
        },
        {
             img :'something/random/img.jpg',
            caption:'Learn how to sign in',
            title:'Sign In'

        },
         {
             img :'something/random/img.jpg',
            caption:'Learn how to post',
            title:'Posting'

        },
         {
             img :'something/random/img.jpg',
            caption:'Learn how to send messages',
            title:'Message'

        },
         {
             img :'something/random/img.jpg',
            caption:'learn how to send a friend request to a pal',
            title:'Friend request'

        },
         {
             img :'something/random/img.jpg',
            caption:'learn how to change your profile',
            title:'Profile'

        }
    ]
    })
}
</script>

<style scoped>

</style>
