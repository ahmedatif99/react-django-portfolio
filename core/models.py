from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

EXP_CHOICES = (
    ("Beginner", "Beginner"),
    ("Junior", "Junior"),
    ("Intermediate", "Intermediate"),
    ("Experienced", "Experienced"),
)


class Intro(models.Model):
    greeting = models.CharField(
        max_length=30, blank=True, null=True,
        verbose_name="Greetings (eg: Hello)")
    name = models.CharField(max_length=100, blank=True,
                            null=True, verbose_name="Full Name")
    job_title = models.CharField(max_length=100, blank=True, null=True)
    par_inro = models.TextField(
        blank=True, null=True, verbose_name="Introduction")
    avatar_img = models.CharField(max_length=100, blank=True, null=True)
    hireMe_link = models.CharField(max_length=200, blank=True, null=True)
    cv = models.FileField(blank=True, null=True)

    def __str__(self):
        return self.name


class AboutMe(models.Model):
    title = models.CharField(max_length=20, blank=True, null=True)
    title_2 = models.CharField(max_length=100, blank=True, null=True)
    description_one = RichTextField(blank=True, null=True)
    about_avatar = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self) -> str:
        return self.title


class Services(models.Model):
    icon_image = models.CharField(max_length=100, blank=True, null=True)
    service_name = models.CharField(max_length=40, blank=True, null=True)
    shadow_icon = models.CharField(max_length=100, blank=True, null=True)
    service_description = models.TextField(
        blank=True, null=True)

    def __str__(self) -> str:
        return self.service_name


class Languages(models.Model):
    icon = models.CharField(max_length=100, blank=True, null=True)
    lang_name = models.CharField(
        max_length=100, blank=True, verbose_name="Language Name")
    exp_level = models.CharField(max_length=200, blank=True,
                                 choices=EXP_CHOICES,
                                 verbose_name="Experience Level")

    def __str__(self) -> str:
        return self.lang_name


class Projects(models.Model):
    title = models.CharField(max_length=100)
    language_used = models.CharField(max_length=100, blank=True, null=True)
    about_avatar = models.CharField(max_length=100, blank=True, null=True)
    updated_on = models.DateTimeField(
        auto_now_add=False, null=True, auto_now=True, blank=True)
    Project_info = models.TextField(blank=True, null=True)
    project_link = models.URLField(blank=True, null=True)
    demo_link = models.URLField(blank=True, null=True)
    image = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.title


class SocialLinks(models.Model):
    name = models.CharField(max_length=80, blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    social_icon = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name


class Contact(models.Model):
    icon = models.CharField(max_length=100, blank=True, null=True)
    contact_info = models.CharField(
        max_length=100, blank=True, null=True,
        verbose_name="Contact Info (eg: johndoe2@gmail.com)")
    contact_name = models.CharField(
        max_length=30, blank=True, null=True,
        verbose_name="Contact Name (eg: twitter)")

    def __str__(self) -> str:
        return self.contact_name
