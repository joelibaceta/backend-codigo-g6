# Generated by Django 4.0.3 on 2022-04-08 03:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('commons', '0002_documenttype'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='documenttype',
            options={'verbose_name': 'DocumentType', 'verbose_name_plural': 'DocumentTypes'},
        ),
    ]
