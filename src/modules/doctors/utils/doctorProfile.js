import doctorsData from '../../../mock/doctors.json';

export function getDoctorLocations(doctor) {
  if (doctor.locations?.length) {
    return doctor.locations;
  }

  if (doctor.hospital) {
    return [
      {
        name: doctor.hospital,
        schedule: doctor.schedule ?? 'Contact hospital for timings',
        address:
          doctor.address ??
          `${doctor.location ? `${doctor.location}, ` : ''}${doctor.cityLabel ?? doctor.city}`,
      },
    ];
  }

  return [];
}

export function getDoctorEducation(doctor) {
  if (doctor.education?.length) {
    return doctor.education;
  }

  return doctor.qualifications ? [doctor.qualifications] : [];
}

export function getDoctorDiseases(doctor) {
  return doctor.diseases ?? [];
}

export function getDoctorAbout(doctor) {
  return doctor.about ?? doctor.bio ?? '';
}

export function getSimilarDoctors(doctor, limit = 4) {
  return doctorsData.doctors
    .filter(
      (item) =>
        item.id !== doctor.id &&
        item.city === doctor.city &&
        item.specialtySlug === doctor.specialtySlug
    )
    .slice(0, limit);
}

export function getDoctorFaqs(doctor) {
  return [
    {
      question: `What conditions does ${doctor.name} treat?`,
      answer: `${doctor.name} provides care related to ${(doctor.specialties ?? [doctor.specialty]).join(', ')}. Book an appointment to discuss your symptoms and treatment plan.`,
    },
    {
      question: `How soon can I book an appointment with ${doctor.name}?`,
      answer: `Choose an available slot through Sehat Connect or call our support line. Wait time is typically ${doctor.waitTime ?? '15-30 mins'}.`,
    },
    {
      question: `Where is ${doctor.name} currently practicing?`,
      answer: `${doctor.name} practices at ${doctor.hospital ?? 'partner hospitals'} in ${doctor.cityLabel ?? doctor.city}.`,
    },
  ];
}
