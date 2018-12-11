package iit2.g2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import iit2.g2.domain.Voiture;

public interface VoitureRepository extends JpaRepository<Voiture, Long> {

}
