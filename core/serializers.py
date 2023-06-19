from rest_framework import serializers
from .models import (Intro, AboutMe, Services, Languages,
                     Projects, SocialLinks, Contact)


class IntroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intro
        fields = '__all__'


class AboutMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = '__all__'


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'


class LanguagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Languages
        fields = '__all__'


class ProjectsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Projects
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = '__all__'


class SocialLinksSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialLinks
        fields = '__all__'
