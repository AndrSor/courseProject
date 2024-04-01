package ru.sbrf.school.courseproject.entity;

import jakarta.persistence.*;

import javax.xml.crypto.Data;
import java.time.LocalDate;

@Entity
@Table(name="expense_report")
public class expenseReport {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int id;
    private int sotr;
    private String month;
    @Column(name="dt_from")
    private LocalDate dtFrom;
    @Column(name="dt_to")
    private LocalDate dtTo;
    private double ostat;
    @Column(name="vidano_itogo")
    private double vidanoItogo;
    @Column(name="sogl_not_potr_itogo")
    private double sogl_not_potr_itogo
    private String status;
    @Column(name="comment_buh")
    private String commentBuh;
    private int author;
    private int editor;
    private LocalDate created;
    private LocalDate modified;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSotr() {
        return sotr;
    }

    public void setSotr(int sotr) {
        this.sotr = sotr;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public LocalDate getDtFrom() {
        return dtFrom;
    }

    public void setDtFrom(LocalDate dtFrom) {
        this.dtFrom = dtFrom;
    }

    public LocalDate getDtTo() {
        return dtTo;
    }

    public void setDtTo(LocalDate dtTo) {
        this.dtTo = dtTo;
    }

    public double getOstat() {
        return ostat;
    }

    public void setOstat(double ostat) {
        this.ostat = ostat;
    }

    public double getVidanoItogo() {
        return vidanoItogo;
    }

    public void setVidanoItogo(double vidanoItogo) {
        this.vidanoItogo = vidanoItogo;
    }

    public double getSogl_not_potr_itogo() {
        return sogl_not_potr_itogo;
    }

    public void setSogl_not_potr_itogo(double sogl_not_potr_itogo) {
        this.sogl_not_potr_itogo = sogl_not_potr_itogo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCommentBuh() {
        return commentBuh;
    }

    public void setCommentBuh(String commentBuh) {
        this.commentBuh = commentBuh;
    }

    public int getAuthor() {
        return author;
    }

    public void setAuthor(int author) {
        this.author = author;
    }

    public int getEditor() {
        return editor;
    }

    public void setEditor(int editor) {
        this.editor = editor;
    }

    public LocalDate getCreated() {
        return created;
    }

    public void setCreated(LocalDate created) {
        this.created = created;
    }

    public LocalDate getModified() {
        return modified;
    }

    public void setModified(LocalDate modified) {
        this.modified = modified;
    }

    public expenseReport() {
    }

    public expenseReport(int sotr, String month, LocalDate dtFrom, LocalDate dtTo, double ostat, double vidanoItogo, double sogl_not_potr_itogo, String status, String commentBuh, int author, int editor) {
        this.sotr = sotr;
        this.month = month;
        this.dtFrom = dtFrom;
        this.dtTo = dtTo;
        this.ostat = ostat;
        this.vidanoItogo = vidanoItogo;
        this.sogl_not_potr_itogo = sogl_not_potr_itogo;
        this.status = status;
        this.commentBuh = commentBuh;
        this.author = author;
        this.editor = editor;
    }
}
