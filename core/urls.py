from .views import (IntroViewSet, AboutMeViewSet,
                    ServicesViewSet, LanguagesViewSet,
                    ProjectsViewSet, ContactViewSet,
                    SocialLinksViewSet)
from django.urls import path
from rest_framework import routers
from django.urls import include

router = routers.DefaultRouter()
router.register('intro', IntroViewSet)
router.register('about', AboutMeViewSet)
router.register('services', ServicesViewSet)
router.register('languages', LanguagesViewSet)
router.register('projects', ProjectsViewSet)
router.register('contact', ContactViewSet)
router.register('socila-link', SocialLinksViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
