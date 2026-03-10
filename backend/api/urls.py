from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, SkillViewSet, ProjectViewSet, ExperienceViewSet, EducationViewSet, ContactViewSet

router = DefaultRouter()
router.register(r'profile', ProfileViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'education', EducationViewSet)
router.register(r'contact', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
