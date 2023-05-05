-- CreateTable
CREATE TABLE `zip_code` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `zip_code` VARCHAR(255) NOT NULL,
    `zip_code_data` JSON NULL,
    `status_code` INTEGER NOT NULL,
    `api_response` JSON NOT NULL,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modified` DATETIME(0) NULL,
    `deleted` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
