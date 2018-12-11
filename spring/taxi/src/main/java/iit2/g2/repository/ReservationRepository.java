package iit2.g2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import iit2.g2.domain.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
