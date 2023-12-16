-- For Newsletter Signups
CREATE TABLE newsletter_signups (
	id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    starting_a_chapter BOOLEAN,
    volunteering BOOLEAN,
    hiring BOOLEAN,
    becoming_a_buddy BOOLEAN,
    employment BOOLEAN,
    attending_event BOOLEAN,
    partnering BOOLEAN,
    registered_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id) 
);

-- For Inquiry Record-Keeping
CREATE TABLE inquiries (
    id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    message TEXT NOT NULL,
    registered_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);