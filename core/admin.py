from django.contrib import admin
from .models import (Intro,
                     AboutMe,
                     Services,
                     Languages,
                     Projects,
                     SocialLinks,
                     Contact)

# Register your models here.
admin.site.register(AboutMe)
admin.site.register(Intro)
admin.site.register(Projects)
admin.site.register(Services)
admin.site.register(Languages)
admin.site.register(SocialLinks)
admin.site.register(Contact)
