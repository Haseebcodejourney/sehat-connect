import { DOCTOR_CITIES, DOCTOR_SPECIALTIES } from '../constants';
import doctorsData from '../../../mock/doctors.json';

export function getCityLabel(slug) {
  return DOCTOR_CITIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function getSpecialtyLabel(slug) {
  return DOCTOR_SPECIALTIES.find((s) => s.slug === slug)?.label ?? slug;
}

export function getDoctorProfilePath(doctor) {
  return `/doctors/${doctor.city}/${doctor.specialtySlug}/${doctor.slug}`;
}

export function getDoctorsListPath({ city, specialty } = {}) {
  if (city && specialty) return `/doctors/${city}/${specialty}`;
  if (city) return `/doctors/${city}`;
  return '/doctors';
}

export function findDoctorBySlug({ city, specialty, slug }) {
  return doctorsData.doctors.find(
    (doctor) =>
      doctor.slug === slug && doctor.city === city && doctor.specialtySlug === specialty
  );
}

export function getListingLocationLabel(city) {
  if (city) return `in ${getCityLabel(city)}`;
  return 'in Pakistan';
}

export function filterDoctors({ city, specialty, searchTerm = '', filters = {}, sortBy = 'default' }) {
  let list = [...doctorsData.doctors];

  if (city) {
    list = list.filter((doctor) => doctor.city === city);
  }

  if (specialty) {
    list = list.filter((doctor) => doctor.specialtySlug === specialty);
  }

  if (searchTerm.trim()) {
    const term = searchTerm.trim().toLowerCase();
    list = list.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(term) ||
        doctor.specialty.toLowerCase().includes(term) ||
        (doctor.specialties ?? []).some((s) => s.toLowerCase().includes(term))
    );
  }

  if (filters.specialty) {
    list = list.filter((doctor) => doctor.specialtySlug === filters.specialty);
  }

  switch (sortBy) {
    case 'fee-low':
      list.sort((a, b) => a.fee - b.fee);
      break;
    case 'experience':
      list.sort((a, b) => b.experience - a.experience);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    default:
      list.sort((a, b) => Number(b.featured) - Number(a.featured));
      break;
  }

  return list;
}
