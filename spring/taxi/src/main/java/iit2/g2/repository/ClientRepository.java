package iit2.g2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import iit2.g2.domain.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

}
