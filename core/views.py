from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import (Intro, AboutMe, Services,
                     Languages, Projects, SocialLinks, Contact)
from .serializers import (IntroSerializer, AboutMeSerializer,
                          ServicesSerializer, LanguagesSerializer,
                          ProjectsSerializer, ContactSerializer,
                          SocialLinksSerializer)
# Create your views here.


class IntroViewSet(viewsets.ModelViewSet):
    queryset = Intro.objects.all()
    serializer_class = IntroSerializer
    permission_classes = (AllowAny,)


class AboutMeViewSet(viewsets.ModelViewSet):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer
    permission_classes = (AllowAny,)


class ServicesViewSet(viewsets.ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer
    permission_classes = (AllowAny,)


class LanguagesViewSet(viewsets.ModelViewSet):
    queryset = Languages.objects.all()
    serializer_class = LanguagesSerializer
    permission_classes = (AllowAny,)


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    permission_classes = (AllowAny,)


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = (AllowAny,)


class SocialLinksViewSet(viewsets.ModelViewSet):
    queryset = SocialLinks.objects.all()
    serializer_class = SocialLinksSerializer
    permission_classes = (AllowAny,)
