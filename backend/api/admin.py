from django.contrib import admin
from .models import Profile, Skill, Project, Experience, Education, Contact, Resume

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'titles')

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category')
    list_filter = ('category',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')
    ordering = ('order',)

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'start_date', 'is_internship')
    list_filter = ('is_internship',)

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'institution', 'start_date')

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('email', 'phone')

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')

# Restrict Admin Access to 'Dhanush' only
original_has_permission = admin.site.has_permission

def custom_has_permission(request):
    """
    Custom permission check:
    1. Check original permission (is_active, is_staff, etc.)
    2. Explicitly enforce the username must be 'Dhanush'
    """
    if not original_has_permission(request):
        return False
    return request.user.username == 'Dhanush'

admin.site.has_permission = custom_has_permission

# Set Admin Header Links
admin.site.site_header = "DS Portfolio Admin"
admin.site.site_title = "DS Portfolio CMS"
admin.site.index_title = "Manage your Portfolio Content"
admin.site.site_url = "https://dhanush-portfolio-pi.vercel.app/" # This adds the "View Site" link at the top
