from rest_framework import viewsets
from django.http import FileResponse, Http404
from .models import Profile, Skill, Project, Experience, Education, Contact, Resume
from .serializers import ProfileSerializer, SkillSerializer, ProjectSerializer, ExperienceSerializer, EducationSerializer, ContactSerializer, ResumeSerializer

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all().order_by('-start_date')
    serializer_class = ExperienceSerializer

class EducationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Education.objects.all().order_by('-start_date')
    serializer_class = EducationSerializer

class ContactViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class ResumeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Resume.objects.all().order_by('-uploaded_at')
    serializer_class = ResumeSerializer

def download_resume(request):
    """Force-download the latest resume file."""
    resume = Resume.objects.order_by('-uploaded_at').first()
    if not resume or not resume.file:
        raise Http404("No resume found")

    # Get clean filename
    original_name = resume.file.name.split('/')[-1]
    # Use the resume title for a cleaner filename
    clean_name = resume.title.replace(' ', '_') + '.pdf'

    response = FileResponse(
        resume.file.open('rb'),
        content_type='application/pdf',
    )
    response['Content-Disposition'] = f'attachment; filename="{clean_name}"'
    return response
