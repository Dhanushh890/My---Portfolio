from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, SkillViewSet, ProjectViewSet, ExperienceViewSet, EducationViewSet, ContactViewSet, ResumeViewSet, download_resume

router = DefaultRouter()
router.register(r'profile', ProfileViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'education', EducationViewSet)
router.register(r'contact', ContactViewSet)
router.register(r'resume', ResumeViewSet)

urlpatterns = [
    path('resume/download/', download_resume, name='download_resume'),
    path('', include(router.urls)),
]
