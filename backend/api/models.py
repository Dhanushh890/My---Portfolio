from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    titles = models.CharField(max_length=200, help_text="Comma-separated titles like 'Data Analyst, Python Developer'")
    photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)
    short_intro = models.TextField(help_text="Short introduction for homepage")
    about_me = models.TextField(help_text="Detailed introduction for About section")

    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, help_text="e.g., Programming, Databases, Tools")

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    short_description = models.TextField()
    technologies = models.CharField(max_length=200, help_text="Comma-separated skills used (e.g., Python, React)")
    live_link = models.URLField(blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

class Experience(models.Model):
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True, help_text="Leave blank if currently working here")
    description = models.TextField()
    is_internship = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.role} at {self.company}"

class Education(models.Model):
    degree = models.CharField(max_length=150)
    institution = models.CharField(max_length=150)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.degree

class Contact(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    linkedin_link = models.URLField(blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return "Contact Details"
