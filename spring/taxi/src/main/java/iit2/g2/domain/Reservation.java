package iit2.g2.domain;

import java.time.ZonedDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="reservation")
public class Reservation {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="date_reservation")
	private ZonedDateTime dateReservation;
	
	@Column(name="prix")
	private Integer prix;

	
	@ManyToOne
	private Voiture voiture;
	
	@ManyToOne
	private Client client;
	
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the dateReservation
	 */
	public ZonedDateTime getDateReservation() {
		return dateReservation;
	}

	/**
	 * @param dateReservation the dateReservation to set
	 */
	public void setDateReservation(ZonedDateTime dateReservation) {
		this.dateReservation = dateReservation;
	}

	/**
	 * @return the prix
	 */
	public Integer getPrix() {
		return prix;
	}

	/**
	 * @param prix the prix to set
	 */
	public void setPrix(Integer prix) {
		this.prix = prix;
	}
	
	

	/**
	 * @return the voiture
	 */
	public Voiture getVoiture() {
		return voiture;
	}

	/**
	 * @param voiture the voiture to set
	 */
	public void setVoiture(Voiture voiture) {
		this.voiture = voiture;
	}

	/**
	 * @return the client
	 */
	public Client getClient() {
		return client;
	}

	/**
	 * @param client the client to set
	 */
	public void setClient(Client client) {
		this.client = client;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		return Objects.hashCode(id);
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Reservation other = (Reservation) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
}
